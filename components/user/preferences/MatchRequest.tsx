import {useState} from "react";

interface MatchRequestProps {
    languages: string[];
    onSaved: (data: any) => void;
}

export const MatchRequest = (props: MatchRequestProps) => {
    const [language, setLanguage] = useState();
    const onSubmit = (e: any) => {
        e.preventDefault();
        props.onSaved({language: language});
    };

    return (<>
        <form className='match-request' onSubmit={(e) => {
            onSubmit(e);
        }}>
            <select
                name='language'
                className='match-request__language'
                onChange={(e) => {
                    setLanguage(e.target.value)
                }}
                value={language}>
                {
                    props.languages.map((language, index) => {
                        return <option key={index} value={language}>{language}</option>
                    })
                }
            </select>
            <button className='match-request__save'>Save Match Request</button>
        </form>
    </>);
}