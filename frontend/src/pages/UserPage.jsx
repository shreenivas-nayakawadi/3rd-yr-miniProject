import { useAuthStore } from "../store/authStore";

const UserPage = () => {
      const { user, logout } = useAuthStore();

      const handleLogout = () => {
            logout();
      };

      return (
            <div className="max-w-md w-full mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-200 sm:max-w-sm">
                  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                        User
                  </h2>

                  <div className="space-y-6">
                        <ProfileInformation user={user} />
                        <AccountActivity user={user} />
                  </div>

                  <div className="mt-4">
                        <button
                              onClick={handleLogout}
                              className="mt-4 sm:mt-5 w-full py-2 sm:py-3 px-4 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white transition duration-200"
                        >
                              Logout
                        </button>
                  </div>
            </div>
      );
};

const ProfileInformation = ({ user }) => (
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Profile Information
            </h3>
            <p className="text-gray-700">Name: {user.username}</p>
            <p className="text-gray-700">Email: {user.email}</p>
      </div>
);

const AccountActivity = ({ user }) => (
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Account Activity
            </h3>
            <p className="text-gray-700">
                  <span className="font-bold">Joined: </span>
                  {new Date(user.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                  })}
            </p>
      </div>
);

export default UserPage;
