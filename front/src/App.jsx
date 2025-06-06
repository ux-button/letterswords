import { Button } from "./components/Button";
import { Input } from "./components/Input";

const App = () => {
  return (
    <div className="bg-mono-8">
      <h1 class="text-3xl bg-amber-400">dsfdsfsdffde</h1>
      <Button type="primary" size="small" icon="star">
        Excellent
      </Button>
      <Button type="secondary" size="main" icon="star">
        Remarkable
      </Button>
      <Button type="positive" size="large" icon="star">
        Fantastic
      </Button>
      <Button type="positive" size="xsize" icon="star">
        Outstanding
      </Button>
      <Input type="onLight" title="New Word" placeholder="Type word" />
    </div>
  );
};

export { App };
