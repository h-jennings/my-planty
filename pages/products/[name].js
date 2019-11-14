import { useRouter } from 'next/router';

const product_details = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
    <h1>Product Page: {name}</h1>
    </>
  );
};

export default product_details;