const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSep8GQE3uCsfPd13UZjvY9glTgoIkgfrn9LdmueZp-Cs-p9RQ/formResponse';
const USER_ID = 'entry.1133224556';
const EXPERIENCE_ID = 'entry.1634560356';
const SALARY_ID = 'entry.989687674';
const NAME_ID = 'entry.1243986859';
const DATA_ID = 'entry.2075097055';

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