import DefaultLayout from "@/components/Layout";
import Login from "@/components/Login";
import { Card } from "antd";

const Home = () => {
  return (
    <div>
      <Card>Testing</Card>
    </div>
  );
};

Home.getLayout = function Layout(page: any) {
  return <DefaultLayout navigation={true}>{page}</DefaultLayout>;
};
export default Home;
