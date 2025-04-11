const Views = async () => {

    await new Promise((resolve) => setTimeout(resolve, 6000))
  return (
    <div style={{ textAlign: "center" }}>
       3000 Views 🪟 From Server Component
    </div>
  )
};

export default Views;
