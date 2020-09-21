import { Effect, Reducer } from 'umi';

export interface SummonModelState {
	name: string;
}

export interface SummonModelType {
	namespace: 'summon';
	state: SummonModelState;
	effects: {
		query: Effect;
	};
	reducers: {
		save: Reducer<SummonModelState>;
	};
}
const SummonModel: SummonModelType = {
	namespace: 'summon',
	state: {
		name: 'summon',
	},
	effects: {
		*query({ payload }, { call, put }) {
		},
	},
	reducers: {
		save(state, action) {
			return {
				...state,
				...action.payload,
			};
		},
	},
};

export default SummonModel;