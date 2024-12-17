interface ITypography {
  children: React.ReactNode;
}
function Typography({ children }: ITypography) {
  return (
    <h1
      className={"kode_mono_font text-5xl font-medium my-[1.5em]   text-center"}
    >
      {children}
    </h1>
  );
}

export default Typography;
