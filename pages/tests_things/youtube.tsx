import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

const Dashboard = () => {
  const { user } = useUser();
  if (user) {
    return (
      <div>
        <a href="https://www.youtube.com/watch?v=5qap5aO4i9A">LoFi Music</a>
        <a href="https://www.youtube.com/watch?v=fEvM-OUbaKs">Jazz Music</a>
        <a href="https://www.youtube.com/watch?v=XULUBg_ZcAU">Piano Music</a>
      </div>
    );
  } else {
    return <div>Please login</div>
  }
};

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async () => {
    return {
      props: {
      },
    };
  },
});

export default Dashboard;
