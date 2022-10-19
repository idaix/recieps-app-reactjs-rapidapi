import { useEffect, useState } from "react"
import { Footer, Grid, Header, Loader, ReciepCard, SearchSort, Sidebar } from "../components"
import { fetchRecipes } from "../utils/fetchApi"

const Feed = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOnSearch, setIsOnSearch] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    setRecipes([])
    if(isOnSearch){
      fetchRecipes(`feeds/search?maxResult=18&start=0&q=${searchValue}`).then(data=>setRecipes(data.feed))
      setIsOnSearch(false)
    }else{
      fetchRecipes(`feeds/list?limit=24&start=0`).then(data=>setRecipes(data.feed))
    }
  }, [searchValue])

  useEffect(()=>{
    fetchRecipes('categories/list').then(data=>setCategories(data['browse-categories']))
  }, [])

  
  return (
    <div>
      <Header />
      <main className="flex gap-2">
        <Sidebar categories={categories} setSearchValue={setSearchValue} setIsOnSearch={setIsOnSearch} />
        <div className="flex-1">
          <SearchSort searchValue={searchValue} setSearchValue={setSearchValue} setIsOnSearch={setIsOnSearch} />
          {recipes.length?(
            <Grid>
              {recipes.map((recipe, i)=>(
                <ReciepCard key={i} {...recipe}/>
              ))}
            </Grid>
          ):(<div className="w-full"><Loader /></div>)}
        </div>
      </main>
      
    </div>
  )
}

export default Feed