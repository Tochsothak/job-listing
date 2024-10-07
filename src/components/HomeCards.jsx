import { Link } from "react-router-dom";
import Card from "./Card";
const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <card>
            <h2 className="text-2xl font-bold">For Developer</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Brows jobs
            </Link>
          </card>
          <card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <link to="/add-job" className="">
              Add Job
            </link>
          </card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
