import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminReport = () => {
  const [report, setReport] = useState({
    totalBooks: 0,
    categoryCounts: [],
    totalUsers: 0,
    totalTopics: 0,
  });

  useEffect(() => {
    // Replace this with your backend endpoint
    axios
      .get("http://localhost:8000/api/admin/report")
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => console.error("Error fetching report", err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Cards */}
      <Card className="shadow-xl bg-white">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-2">Total Books</h2>
          <p className="text-3xl font-bold text-blue-600">
            {report.totalBooks}
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-xl bg-white">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-green-600">
            {report.totalUsers}
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-xl bg-white">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-2">Total Topics</h2>
          <p className="text-3xl font-bold text-purple-600">
            {report.totalTopics}
          </p>
        </CardContent>
      </Card>

      {/* Bar Chart */}
      <Card className="col-span-1 lg:col-span-2 shadow-xl bg-white">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Books Per Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={report.categoryCounts}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReport;
