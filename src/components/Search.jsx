import React,{useState} from 'react';
import respApiJson from '../respApi.json'
import CardProducts from './CardProducts';

const Search = () => {
    const allProducts = []
    const categories = []
    const categoryFashion =[]
    const categoryWatches =[]
    const categoryFurnitures =[]
    const categoryShoes =[]
    const categoryOthers =[]
    const [selectNameCategory, setSelectNameCategory] = useState("")
    

    respApiJson.map((e, i) => {
        allProducts.push(e)
        e.category.id===1? categoryFashion.push(e):null
        e.category.id===2? categoryWatches.push(e):null
        e.category.id===3? categoryFurnitures.push(e):null
        e.category.id===4? categoryShoes.push(e):null
        e.category.id===5? categoryOthers.push(e):null
    })
    allProducts.map((e, i) => {
        categories.includes(e.category.name) ? null : categories.push(e.category.name)
    })
    const handeleClick=((target)=>{
            console.log(target)
            setSelectNameCategory(target)
    })

    return (
        <main className='search'>
            <h2>Categories</h2>
            <section>
                {
                    categories.map((e, i) => (
                        <h3 
                        onClick={handeleClick}
                        key={e}>{e}</h3>
                    ))
                }
            </section>
            <article>
                {
                    categoryShoes.map((e,i)=>(
                        <img key={e.id} src={e.images[0]} alt="" />
                    ))
                }
            </article>
        </main>
    );
}

export default Search;
