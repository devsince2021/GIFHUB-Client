import { NEXT_EDITING_STEP, PREVIOUS_EDITING_STEP } from '../constants/actionTypes';

export function nextEditingStep() {
  return {
    type: NEXT_EDITING_STEP,
  };
};

export function previousEditingStep() {
  return {
    type: PREVIOUS_EDITING_STEP,
  }
}

export * as actionMediaFile from './actionMediaFile';
export * as actionModal from './actionModal';
