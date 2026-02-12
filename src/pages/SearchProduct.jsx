
import { items } from '../Context/Data1'
import { useParams } from 'react-router'
import Product from '../componenets/Product'

const SearchProduct = () => {

    const { term } = useParams();

    const searchResults = items.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));



    return (

        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-600">Search Results for "{term}"</h2>
            <Product items={searchResults} />
        </div>



    )
}

export default SearchProduct