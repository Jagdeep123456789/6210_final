import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabase";

export default function ItemDetail() {
    const { id } = useParams(); // Corrected useParams typo
    const [itemData, setItemData] = useState(null); // Corrected useState typo

    useEffect(() => {
        const fetchItemsDetails = async () => {
            const { data, error } = await supabase
                .from('scp')
                .select('*')
                .eq('id', id)
                .single();
            if (error) {
                console.error(error);
            } else {
                setItemData(data);
            }
        };
        fetchItemsDetails();
    }, [id]);

    return (
        <div>
            {itemData ? (
                <>
                    <h1>{itemData.item}</h1>
                    <h2>{itemData.class}</h2>
                    <h3>Description</h3>
                    <p>{itemData.description}</p>
                    <h3>Containment</h3>
                    <p>{itemData.containment}</p>
                    <p><img src={itemData.image} alt={itemData.item} /></p>
                </>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}


