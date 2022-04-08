import {fireEvent, render} from "@testing-library/react";
import {MatchRequest} from "./MatchRequest";

describe('MatchRequest', () => {
    test('user can choose a language to ensemble on', () => {
        // Given
        const languages = ['Java', 'Other']
        const onMatchRequestChanged = jest.fn();
        const {container} = renderMatchRequest(languages, onMatchRequestChanged);

        // When
        selectLanguage(container, 'Java');
        savePreferences(container);

        // Then
        expect(onMatchRequestChanged).toHaveBeenCalledWith({language: 'Java'});
    });

    function renderMatchRequest(languages: string[], onSaved: any) {
        return render(
            <MatchRequest
                languages={languages}
                onSaved={onSaved}/>
        );
    }

    function selectLanguage(container: HTMLElement, language: string) {
        const primaryLanguage = container.querySelector('.match-request .match-request__language');
        fireEvent.change(primaryLanguage!, {target: {value: language}});
    }

    function savePreferences(container: HTMLElement) {
        const save = container.querySelector('.match-request .match-request__save');
        fireEvent.click(save!);
    }
});
