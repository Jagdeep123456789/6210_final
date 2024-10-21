import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabase';

function NavMenu() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const { data, error } = await supabase
                .from('scp')
                .select('id, item');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setItems(data);
            }
        };

        fetchItems();
    }, []);

    return (
        <nav class="navmenu">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>{item.item}</Link>
                    </li>
                ))}
                <li>
                    <Link to="/admin">Admin Panel</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;
