import { useSelector } from "react-redux";
import { Container } from "./styles";
import { getProfile, getTheme } from "../../../../redux/selectors";
import IntroduceSection from "../../../../components/IntroduceSection";
import { IntroduceItem } from "../../../../interfaces/ComponentProps";
import { useEffect, useState } from "react";

const Overview: React.FC = () => {
    const theme = useSelector(getTheme);
    const profile = useSelector(getProfile);
    const [birthday, setBirthday] = useState<IntroduceItem[] | any>([]);
    const [introduce, setIntroduce] = useState<IntroduceItem[] | any>([]);
    const [gender, setGender] = useState<IntroduceItem[] | any>([]);

    useEffect(() => {
        if (profile.status == "success") {
            setBirthday([convertArray(profile.data.profile, profile.data.profile?.dob)]);
            setIntroduce([convertArray(profile.data.profile, profile.data.profile?.introduce)]);
            setGender([convertArray(profile.data.profile, profile.data.profile?.gender)]);
        }
    }, [profile]);

    const convertArray = (profileData: any | undefined, profileAttribute: string|undefined) => {
        if (profileData) {
            return {
                introduceContent: profileAttribute == 'male' ? 'Male' : profileAttribute == 'female' ? 'Female' : profileAttribute,
                introduceId: profileData.id,
                introduceStatus: "",
                introduceType: "profile",
            };
        }
    };

    return (
        <Container>
            <IntroduceSection
                title="About"
                deletable={false}
                profileStatus={false}
                items={introduce}
                addMore={false}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "introduce",
                        type: "profile",
                        title: "Introduce",
                        inputType: "textarea",
                    },
                ]}
            />
            <IntroduceSection
                title="Birthday"
                deletable={false}
                profileStatus={false}
                items={birthday}
                addMore={false}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "dob",
                        type: "profile",
                        title: "Birthday",
                        inputType: "date",
                    },
                ]}
            />
            <IntroduceSection
                title="Gender"
                deletable={false}
                profileStatus={false}
                items={gender}
                addMore={false}
                editable={false}
                formRender={[]}
            />
        </Container>
    );
};

export default Overview;
