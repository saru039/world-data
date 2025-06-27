import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchCountries = createAsyncThunk('countries/fetchCountries', 
    async() =>{
        const api = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
        return await api.json();
    }
);

const initialState = {
    data : [],
    error : null,
    status: 'idle',
}

const countrySlice = createSlice({
    name: "countries",
    initialState,
    extraReducers: (builder) => {
  builder
    .addCase(fetchCountries.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCountries.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    })
    .addCase(fetchCountries.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
}
})

export default countrySlice.reducer;