import { Button } from './Button';
import { Icon } from './Icon';

const MultiAnswerCard = () => {
  return (
    <div className="bg-mono-0 fixed top-30 right-4 bottom-8 left-4 flex flex-col items-center justify-between rounded-4xl">
      <section className="flex w-full items-center justify-between p-4">
        <div className="h-6 w-6"></div>
        <Button type="primary" size="main" icon="time">
          Stress learning
        </Button>
        <Icon type="rise" size={24} />
      </section>
      <sectiion className="flex flex-col items-center gap-2">
        <div className="text-mono-100 text-screen">Navigation</div>
        <div className="flex w-fit justify-center">
          <Button type="ghost" size="main" icon="speaker">
            Say
          </Button>
        </div>
      </sectiion>
      <section className="w-full space-y-4 px-4 pb-5">
        <div className="w-fit">
          <Button type="secondary" size="main" icon="skip">
            Skip
          </Button>
        </div>
        <div>
          <Button type="ghost" size="large">
            Приключение
          </Button>
          <Button type="ghost" size="large">
            Приключение
          </Button>
          <Button type="ghost" size="large">
            Приключение
          </Button>
          <Button type="ghost" size="large">
            Приключение
          </Button>
        </div>
      </section>
    </div>
  );
};

export { MultiAnswerCard };
