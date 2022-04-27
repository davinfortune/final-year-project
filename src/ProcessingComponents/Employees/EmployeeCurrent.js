async function CurrentEmployee() {

    let result = await fetch(
        'https://final-year-project-davin.herokuapp.com/getemployee', {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        if (result) {
            return result;
        }

}

export default CurrentEmployee;