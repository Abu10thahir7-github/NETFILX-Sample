import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
  const [moives, setMoives] = useState([])
  const [urlId,seturlId] = useState('')
  useEffect(()=>{
     axios.get(props.url).then(response=>{
      console.log(response.data)
      setMoives(response.data.results)
     }).catch(err=>{
      alert('Network Error')
     })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   const handleMovie = (id)=>{
   console.log(id)
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then(response=>{
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        console.log('Tailer not available')
      }    
   })
   }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
          <div className='posters'>
            {moives.map((obj)=>

            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
          
        </div>
      { urlId &&   <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost