interface SubHeadingProps {
  subHeading: string;
}

const SubHeading = ({ subHeading }: SubHeadingProps) => {
  return (
    <h3 className="uppercase bg-black text-[var(--color-primary)] text-md font-semibold p-1">
      {subHeading}
    </h3>
  );
};

export default SubHeading;
