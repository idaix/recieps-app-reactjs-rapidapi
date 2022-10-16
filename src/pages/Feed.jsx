import { useEffect, useState } from "react"
import { Grid, Header, Loader, ReciepCard, SearchSort, Sidebar } from "../components"
import { fetchRecipes } from "../utils/fetchApi"

const Feed = () => {
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    fetchRecipes(`feeds/list?limit=24&start=0`).then(data=>setRecipes(data.feed))
  }, [])

  useEffect(()=>{
    fetchRecipes('categories/list').then(data=>setCategories(data['browse-categories']))
  }, [])
  console.log(categories);
  return (
    <div>
      <Header />
      <main className="flex gap-2">
        <Sidebar categories={categories} />
        <div className="flex-1">
          <SearchSort />
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