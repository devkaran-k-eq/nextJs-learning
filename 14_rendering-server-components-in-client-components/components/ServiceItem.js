
export default function ServiceItem({ serviceName }) {
  if (typeof window === "undefined") {
    console.log("Running ServiceItem as a Server Component");
  } else {
    console.log("Running ServiceItem as a Client Component");
  }
  return (
    <>
      <div style={{display: "none"}}>Chutiya Para</div>
      <li>{serviceName}</li>
    </>
  )
}

// This is server component but WHen We use in ServiceList it became "Client Component" for that we use children Prop technique