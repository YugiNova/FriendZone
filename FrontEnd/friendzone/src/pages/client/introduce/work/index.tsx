import { useSelector } from "react-redux";
import IntroduceSection from "../../../../components/IntroduceSection";
import { getProfile } from "../../../../redux/selectors";
import { useState,useEffect } from 'react'
import { IntroduceItem } from "../../../../interfaces/ComponentProps";

const Work: React.FC = () => {
    const profile = useSelector(getProfile)
    const [work,setWork] = useState<IntroduceItem[]|any>([])
    const [education,setEducation] = useState<IntroduceItem[]|any>([])

    useEffect(()=>{
        if(profile.status == "success"){
            setWork(convertArray(profile.data.works_educations,"work"))
            setEducation(convertArray(profile.data.works_educations,"education"))
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
                    introduceMoreContent: `${item.year_start} - ${item.year_end}`,
                    introduceType: 'work_education'
                }
            })
            return newprofileDataArray
        }
    }

    return (
        <div>
            <IntroduceSection
                title="Educations"
                items={education}
                addMore={profile.isOwner}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "name",
                        type: "work_education",
                        title:"School, university, college,...",
                        inputType: "text"
                    },
                    {
                        name: "year",
                        type: "work_education",
                        title:"range",
                        inputType: "range"
                    },
                    {
                        name: "type",
                        type: "work_education",
                        title:"education",
                        inputType: "text"
                    }
                ]}
            />
            <IntroduceSection
                title="Works"
                items={work}
                addMore={profile.isOwner}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "name",
                        type: "work_education",
                        title:"Company",
                        inputType: "text"
                    },
                    {
                        name: "year",
                        type: "work_education",
                        title:"range",
                        inputType: "range"
                    },
                    {
                        name: "type",
                        type: "work_education",
                        title:"work",
                        inputType: "text"
                    }
                ]}
            />
        </div>
    );
};

export default Work;
