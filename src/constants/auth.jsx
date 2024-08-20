export const auth = "authkey";

// ############### Auth ####################
export const logOut = "logOut";
export const register = "register";
export const confirmEmail = "confirmEmail"
export const forgetPassword = "forgetPassword"
export const resetPassword = "resetPassword"
export const resendVerificationEmail = "resendVerificationEmail"

// ############### User ####################

export const getUserById = "getUserById";
export const updateUser = "updateUser";
export const updateProfilePhoto = "updateProfilePhoto";
export const updateCompanyLogo = "updateCompanyLogo";
export const deleteUser = "deleteUser";

// ############### User Role ####################
export const userRoleById = "userRoleById";
export const addUserRole = "addUserRole";
export const deleteUserRole = "deleteUserRole";

// ############### Role ####################
export const getRole = "getRole";
export const addRole = "addRole";
export const updateRole = "updateRole";
export const deleteRole = "deleteRole";

// *************** Endpoint ****************

// ############### Auth ####################

export const logOutEndpoint = "/api/Auth/Logout";
export const registeEndpoint = "/api/Auth/Register";
export const confirmEmailEndpoint = "/api/Auth/ConfirmEmail"
export const forgetPasswordEndpoint = "/api/Auth/ForgotPassword"
export const resetPasswordEndpoint = "/api/Auth/ResetPassword"
export const resendVerificationEmailEndpoint = "/api/Auth/ResendVerificationEmail"

// ############### User ####################
export const getUserByIdEndpoint = "/api/User/get";
export const updateUserEndpoint = "/api/User/update";
export const updateProfilePhotoEndpoint = "/api/User/updateProfilePhoto";
export const updateCompanyLogoEndpoint = "/api/User/updateCompanyLogo";
export const deleteUserEndpoint = "/api/User/updateCompanyLogo";

// ############### User Role ####################
export const userRoleByIdEndpoint = "/api/UserRoles/Get";
export const addUserRoleEndpoint = "/api/UserRoles/Add";
export const deleteUserRoleEndpoint = "/api/UserRoles/Delete";

// ############### Role ####################
export const getRoleEndpoint = "/api/Roles/get";
export const addRoleEndpoint = "/api/Roles/AddRole";
export const updateRoleEndpoint = "/api/Roles/UpdateRole}";
export const deleteRoleEndpoint = "/api/Roles/Remove";
