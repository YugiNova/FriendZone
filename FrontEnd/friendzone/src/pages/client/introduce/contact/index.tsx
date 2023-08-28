import { useSelector } from "react-redux"
import IntroduceSection from "../../../../components/IntroduceSection"
import { getProfile } from "../../../../redux/selectors"
import { useEffect, useState } from "react"
import { IntroduceItem } from "../../../../interfaces/ComponentProps"

const Contact:React.FC = () => {
    const profile = useSelector(getProfile)
    const [phone,setPhone] = useState<IntroduceItem[]|any>([])
    const [email,setEmail] = useState<IntroduceItem[]|any>([])
    const [website,setWebsite] = useState<IntroduceItem[]|any>([])
    
    useEffect(()=>{
        if(profile.status == "success"){
            setPhone(convertArray(profile.data.contacts,"phone"))
            setEmail(convertArray(profile.data.contacts,"email"))
            setWebsite(convertArray(profile.data.contacts,"website"))
        }
        console.log(profile.data.contacts)
    },[profile])

    const convertArray = (profileData:any[]|undefined,type:string) => {
        if(profileData && Array.isArray(profileData)){
            let profileDataArray = profileData.filter(item=>{
                if(profile.isOwner){
                    return item.type == type
                }else{
                    return item.status == "public" && item.type == type
                }
            })
            
            let newprofileDataArray = profileDataArray.map(item=>{
                return {
                    introduceContent: item.content,
                    introduceId: item.id,
                    introduceStatus: item.status,
                    introduceType: "contact"
                }
            })
            return newprofileDataArray
        }
    }

    return(
        <div>
            <IntroduceSection
                title="Phone Number"
                items={phone}
                addMore={profile.isOwner} editable={profile.isOwner}
                formRender={[
                    {
                        name: "content",
                        type: "contact",
                        title:"Phone number",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "contact",
                        title:"phone",
                        inputType: "text"
                    }
                ]}
            />
            <IntroduceSection
                title="Email"
                items={email}
                addMore={profile.isOwner} editable={profile.isOwner}
                formRender={[
                    {
                        name: "content",
                        type: "contact",
                        title:"Email",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "contact",
                        title:"email",
                        inputType: "text"
                    }
                ]}
            />
            <IntroduceSection
                title="Website"
                items={website}
                addMore={profile.isOwner} editable={profile.isOwner}
                formRender={[
                    {
                        name: "content",
                        type: "contact",
                        title:"Website",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "contact",
                        title:"website",
                        inputType: "text"
                    }
                ]}
            />
        </div>
    )
}

export default Contact