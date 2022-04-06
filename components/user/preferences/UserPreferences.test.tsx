import {fireEvent, render} from "@testing-library/react";
import {useState} from "react";

interface UserPreferencesProps {
    languages: string[];
}

const UserPreferences = (props: UserPreferencesProps) => {
    const [primaryLangauge, setPrimaryLanguage] = useState('');

    return (<>
        <form className='user-preferences'>
            <select
                name='primary-language'
                className='user-preferences__primary-language'
                onChange={(e) => { setPrimaryLanguage(e.target.value)}}>
                {
                    props.languages.map((language, index) => {
                        return <option key={index} value={language} />
                    })
                }
            </select>
        </form>
        <div className='sys-io-blah-blah-blah'>{primaryLangauge}</div>
    </>);
}

describe('UserPreferences', () => {
    test('user can choose the language to ensemble on', () => {
        // Given: The ability to capture a user's primary language
        const onUserPreferencesChanged = jest.fn();
        const languages = ['Java', 'Other']
        const {container, debug} = render(<UserPreferences languages={languages}/>);
        // When: The user selects Java as their primary language
        const primaryLanguage = container.querySelector('.user-preferences .user-preferences__primary-language');
        fireEvent.change(primaryLanguage!, { target: { value: 'Java' } });
        // Then: We tell the back-end to remember Java as the primary language choice
        const currentPrimaryLanguage = container.querySelector('.sys-io-blah-blah-blah');
        debug();
        expect(currentPrimaryLanguage!.innerHTML).toEqual('Java');
        expect(onUserPreferencesChanged).toHaveBeenCalledWith({primaryLanguage: 'Java'});
    });
});

/*
<UserPreferences className='user-preferences' data-test-id='user-preferences'>
    <select name='primary-language' className='user-preferences__primary-language' value='java'>
        <option key='java' value='Java' />
        <option key='other' value='Other' />
    </select>
</UserPreferences>
 */