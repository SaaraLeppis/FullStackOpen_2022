# Osa 6 / ANECDOTES - REDUX

## State management, Redux and React-Redux

Cloned repo

```shell
git clone https://github.com/fullstack-hy2020/redux-anecdotes
```

removed git

```shell
rm -rf .git
```

Install react-redux

```shell
npm install react-redux
```

### Remember

- wrap App with Provider
- use useDispatch-hook instead of dispatch-function

## Redux Toolkit

```shell
npm install @reduxjs/toolkit
```

- configureStore
- createSlice: combines reducer and action creators (state.push can be used in createSlice)

## Redux Thunk

```shell
npm install redux-thunk
```

- makes possible to define action creators which return functions instead of objects
- dispatch and getState are functions' parameters
- asyncronous action creators can be created

## connect -function

```js
import { connect } from "react-edux";
```

- old style which replaced by _useSelector_ and _useDispatch_
- _useSelector_ replaced by _mapStateToProps_-function
- _useDispatch_ replaced by _mapDispatchToProps_ -function
