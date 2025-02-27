export const initialPopupFormState = {
	formIsOpenFlag: false,
	inputValue: '',
	formAction: '',
}

export const popupFormReducer = (state = initialPopupFormState, action) => {
	switch (action.type) {
		case 'SET_FORM_IS_OPEN_FLAG': {
			return {
				...state,
				formIsOpenFlag: action.payload,
			}
		}
		case 'SET_FORM_ACTION': {
			return {
				...state,
				formAction: action.payload,
			}
		}
		case 'SET_INPUT_VALUE': {
			return {
				...state,
				inputValue: action.payload,
			}
		}
		default: {
			return state
		}
	}
}
