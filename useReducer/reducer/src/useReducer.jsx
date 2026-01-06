import React, { useReducer } from 'react';

// Initial state
const initialState = {
  step: 1,
  isSubmitted: false,
  values: {
    name: '',
    email: '',
    username: '',
    password: ''
  }
};

// Reducer function (pure and side-effect free)
const useReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        }
      };

    case 'NEXT_STEP':
      return {
        ...state,
        step: Math.min(state.step + 1, 3)
      };

    case 'PREVIOUS_STEP':
      return {
        ...state,
        step: Math.max(state.step - 1, 1)
      };

    case 'SUBMIT_FORM':
      return {
        ...state,
        isSubmitted: true
      };

    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
};

// Main component
const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handle input changes
  const handleChange = (field) => (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field,
      value: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_FORM' });
  };

  // Navigation handlers
  const handleNext = () => dispatch({ type: 'NEXT_STEP' });
  const handlePrevious = () => dispatch({ type: 'PREVIOUS_STEP' });
  const handleReset = () => dispatch({ type: 'RESET_FORM' });

  // Render current step
  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Personal Details</h2>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={state.values.name}
                  onChange={handleChange('name')}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  value={state.values.email}
                  onChange={handleChange('email')}
                  required
                />
              </label>
            </div>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 2:
        return (
          <div>
            <h2>Step 2: Account Details</h2>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={state.values.username}
                  onChange={handleChange('username')}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  value={state.values.password}
                  onChange={handleChange('password')}
                  required
                />
              </label>
            </div>
            <button type="button" onClick={handlePrevious}>
              Back
            </button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        );

      case 3:
        return (
          <div>
            <h2>Step 3: Review & Submit</h2>
            <div>
              <h3>Personal Details:</h3>
              <p><strong>Name:</strong> {state.values.name}</p>
              <p><strong>Email:</strong> {state.values.email}</p>
            </div>
            <div>
              <h3>Account Details:</h3>
              <p><strong>Username:</strong> {state.values.username}</p>
              <p><strong>Password:</strong> {'•'.repeat(state.values.password.length)}</p>
            </div>
            <button type="button" onClick={handlePrevious}>
              Back
            </button>
            <button type="submit">Submit</button>
          </div>
        );

      default:
        return null;
    }
  };

  // Show success message after submission
  if (state.isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully!</h2>
        <button onClick={handleReset}>Reset Form</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderStep()}
    </form>
  );
};

export default useReducer;