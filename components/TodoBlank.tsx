interface TodoBlankProps {
  type: "to do" | "done";
}

export default function TodoBlank({ type }: TodoBlankProps) {
  return (
    <>
      <div className="character m-auto">
        <img
          src={`/image/character-${type.replace(" ", "")}.svg`}
          alt="not yet"
        />
      </div>
      <p className="text-gray-500 text-center">
        {type === "to do" ? (
          <>
            할 일이 없어요.
            <br />
            TODO를 새롭게 추가해주세요!
          </>
        ) : (
          <>
            아직 다 한 일이 없어요.
            <br />
            해야 할 일을 체크해보세요!
          </>
        )}
      </p>
    </>
  );
}
