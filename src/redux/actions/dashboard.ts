export const saveSelectedCountry = (country: any) => ({
  type: "SAVE_SELECTED_COUNTRY",
  payload: country,
});

export const saveSelectedCity = (city: any) => ({
  type: "SAVE_SELECTED_CITY",
  payload: city,
});

export const updateLoading = (loading: boolean) => ({
  type: "UPDATE_LOADER",
  payload: loading,
});
