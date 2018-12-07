import axios from "../../axios-orders";
import {fetchIngredientsFailed, setIngredients} from "../actions/burgerBuilder";
import {put} from "redux-saga/effects";
import * as actions from '../actions/index';

export function* initIngredientsSaga(action) {
    try {
        const response = yield axios.get('/ingredients.json');
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        yield put(fetchIngredientsFailed());
    }

}
