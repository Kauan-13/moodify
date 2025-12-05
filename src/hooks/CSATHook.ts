import { useState } from "react"
import supabase from "../api/supabasae"
import { toast } from "sonner"

interface CSAT {
    id?: number
    function_name: string
    function_id: number
    rating: number
}

interface ProcessedCSAT {
    function_id: number
    function_name: string
    percentage_above_four: number 
}

const useCSAT = () => {

    const [ ratings, setRatings ] = useState<CSAT[]>([])
    const [ processed, setProcessed ] = useState<ProcessedCSAT[]>([])

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    const processAllRatings = (data: CSAT[]): ProcessedCSAT[] => {
        const grouped = data.reduce<Record<number, { name: string, total: number, positive: number, }>>((acc, item) => {

            if (!acc[item.function_id])
                acc[item.function_id] = { name: item.function_name, total: 0, positive: 0 }

            acc[item.function_id].total++
            if (item.rating >= 4) acc[item.function_id].positive++

            return acc
        }, {})

        return Object.entries(grouped).map(([id, info]) => ({
            function_id: Number(id),
            function_name: info.name,
            percentage_above_four: (info.positive / info.total) * 100
        }))
    }

    const getAllRatings = async (): Promise<CSAT[] > => {
        setLoading(true)

        const { data, error: apiError } = await supabase.from('ratings').select('*')
        
        if (apiError) {
            setLoading(false)
            setError(true)
            console.error("[CSATHook] Houve um erro ao realizar o GET/SELECT na tabela de 'ratings' do banco de dados.")
            toast.error('Houve um erro ao carregar os dados de avaliações de usuário...')
            return []
        }

        setRatings(data)
        setProcessed(processAllRatings(data))
        setLoading(false)

        return data
    }

    const postRating = async (newRating: CSAT): Promise<boolean> => {
        setLoading(true);
        setError(false);

        const { error: apiError } = await supabase.from("ratings").insert(newRating);

        if (apiError) {
            setLoading(false);
            setError(true);
            console.error("[CSATHook] Erro ao postar avaliação no banco de dados:", apiError);
            toast.error("Houve um erro ao enviar sua avaliação...");
            return false;
        }

        setRatings(prev => [...prev, newRating]);
        setProcessed(processAllRatings([...ratings, newRating]));

        setLoading(false);
        toast.success("Obrigado pela sua avaliação!");
        return true;
    };

    return { ratings, processed, getAllRatings, postRating, loading, error }

}

export default useCSAT
export type { CSAT }