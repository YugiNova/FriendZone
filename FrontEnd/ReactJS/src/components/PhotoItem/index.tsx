import { useState } from "react"
import PostModal from "../PostModal"
import { Container, PhotoButton } from "./styles"

interface Props {
    src:string
}

const PhotoItem:React.FC<Props> = ({src}) => {
    const [open,setOpen] = useState<boolean>(false)

    const showPost = () =>{
        setOpen(true)
    }

    return(
        <Container >
            <PhotoButton onClick={showPost}>
            <img src={src}/>
            
            </PhotoButton>
            {/* <PostModal open={open} setOpen={setOpen}/> */}
        </Container>
    )
}

export default PhotoItem 