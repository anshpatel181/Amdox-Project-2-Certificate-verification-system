import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { lazy, Suspense } from "react";
const Charts = lazy(() => import("../components/Charts"));

export const AdminDashboard = () => {

  const { certificateCount, logs } = useContext(AppContext)

  const data = [
    { name: "Mon", verifications: 20 },
    { name: "Tue", verifications: 35 },
    { name: "Wed", verifications: 15 },
    { name: "Thu", verifications: 40 },
    { name: "Fri", verifications: 25 },
  ];

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Verifications",
        data: [20, 35, 15, 40, 25],
        backgroundColor: "#6366f1",
        borderRadius: 10,
      },
    ],
  };

  const pieData = {
    labels: ["Valid", "Invalid"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#22c55e", "#ef4444"],
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">

      <div className="rounded-3xl p-8 text-white shadow-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-3xl font-bold">Dashboard Overview 🚀</h1>
        <p className="opacity-90 mt-2">
          Monitor certificates, verifications and system activity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="backdrop-blur-lg bg-white/60 border border-white/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <p className="text-gray-500 text-sm">Total Certificates</p>
          <h2 className="text-3xl font-bold mt-2">
            {certificateCount > 0 ? certificateCount : 0}
          </h2>
        </div>

        <div className="backdrop-blur-lg bg-white/60 border border-white/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <p className="text-gray-500 text-sm">Verified Today</p>
          <h2 className="text-3xl font-bold mt-2">
            {
              logs.filter((log) =>
                new Date(log.createdAt).toDateString() === new Date().toDateString()
              ).length
            }
          </h2>
        </div>

        <div className="backdrop-blur-lg bg-white/60 border border-white/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <p className="text-gray-500 text-sm">Admins</p>
          <h2 className="text-3xl font-bold mt-2">1</h2>
        </div>

      </div>
      
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading Data Visuals...</div>}>
        <Charts barData={barData} pieData={pieData} />
      </Suspense>

    </div>
  );
};

export default AdminDashboard;