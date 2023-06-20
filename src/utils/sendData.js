const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScY8yIHaHKmk-HQT4r2KisvDnI-hPob7UPZKDls4R44o6Gb4A/formResponse';
const USER_ID = 'entry.387559909';
const EXPERIENCE_ID = 'entry.1162322638';
const SALARY_ID = 'entry.1019040594';
const NAME_ID = 'entry.2929727';
const DATA_ID = 'entry.294863456';

export const sendData = ({ id, salary, experience, name, data }) => {
    const formData = new FormData();
    formData.append(NAME_ID, name);
    formData.append(USER_ID, id);
    formData.append(SALARY_ID, salary);
    formData.append(EXPERIENCE_ID, experience);
    formData.append(DATA_ID, data);
    const myInit = {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    };
    const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);
    return fetch(myRequest).then(response => {
        return response
    }).catch(() => {
        return {error: true};
    })
};