const Error = ({ errorMsg }) => {
  return (
    <div className="mt-[300px] text-center text-2xl">
      <p>Üzgünüz işlem gerçekleşirken bir hata oluştu</p>
      <p className="bg-red-500 rounded text-white mt-10">{errorMsg}</p>
    </div>
  );
};

export default Error;
