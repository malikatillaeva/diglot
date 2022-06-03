export default function validateInfo(values) {
    let errors = {}

    if(!values.fullname.trim()) {
        errors.fullname = 'заполните пустую ячейку'
    }

    if(!values.profession.trim()) {
        errors.profession = 'заполните пустую ячейку'
    }

    if(!values.number.trim()) {
        errors.number = 'заполните пустую ячейку'
    }

    return errors;
}