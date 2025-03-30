import { MemoPageWrapper } from "@/components/memo/memo";
import { useAppSelector } from "@/redux/reduxHooks";
import Button from "@/components/ui/button";

export const MemoPage = () => {
  const memos = useAppSelector((state) => state.memos);
  return (
    <MemoPageWrapper>
      <h2>Memos</h2>
      {memos.memos.map((memo) => (
        <div key={memo.createdAt}>
          <h4>{memo.title}</h4>
          <span>{memo.content}</span>
        </div>
      ))}
      <Button>Click me</Button>
    </MemoPageWrapper>
  );
};
