import { useSelector } from "react-redux";
import IntroduceSection from "../../../../components/IntroduceSection";
import { getProfile } from "../../../../redux/selectors";
import { useState,useEffect } from 'react'
import { IntroduceItem } from "../../../../interfaces/ComponentProps";

const Place: React.FC = () => {
    const profile = useSelector(getProfile)
    const [current,setCurrent] = useState<IntroduceItem[]|any>([])
    const [hometown,setHometown] = useState<IntroduceItem[]|any>([])
    const [usetolive,setUsetolive] = useState<IntroduceItem[]|any>([])

    useEffect(()=>{
        if(profile.status == "success"){
            setCurrent(convertArray(profile.data.places,"current"))
            setHometown(convertArray(profile.data.places,"hometown"))
            setUsetolive(convertArray(profile.data.places,"usetolive"))
        }
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
                    introduceContent: item.name,
                    introduceId: item.id,
                    introduceStatus: item.status,
                    introduceType: 'place'
                }
            })
            return newprofileDataArray
        }
    }

    return (
        <div>
            <IntroduceSection
                title="Current"
                addMore={profile.isOwner && current.length == 0 ? true :false} editable={profile.isOwner}
                items={current}
                formRender={[
                    {
                        name: "name",
                        type: "place",
                        title:"Place you are living",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "place",
                        title:"current",
                        inputType: "text"
                    }
                ]}
            />

            <IntroduceSection
                title="Hometown"
                addMore={profile.isOwner && hometown.length == 0 ? true :false} editable={profile.isOwner}
                items={hometown}
                formRender={[
                    {
                        name: "name",
                        type: "place",
                        title:"Your hometown",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "place",
                        title:"hometown",
                        inputType: "text"
                    }
                ]}
            />

            <IntroduceSection
                title="Use to lived"
                addMore={profile.isOwner} editable={profile.isOwner}
                items={usetolive}
                formRender={[
                    {
                        name: "name",
                        type: "place",
                        title:"Place you are living",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "place",
                        title:"usetolive",
                        inputType: "text"
                    }
                ]}
            />
        </div>
    );
};

export default Place;
