import { useEffect, useState } from "react"
import { Grid, Header, Loader, ReciepCard } from "../components"
import { fetchRecipes } from "../utils/fetchApi"

const Feed = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(()=>{
    fetchRecipes(`list?limit=24&start=0`).then(data=>setRecipes(data.feed))
  }, [])
  console.log(recipes);
  if(!recipes.length) return <div className="w-full"><Loader /></div>
  return (
    <div>
      <Header />
      <Grid>
        {recipes.map((recipe, i)=>(
          <ReciepCard key={i} {...recipe}/>
        ))}
      </Grid>
    </div>
  )
}

export default Feed