export interface CountdownOptions {
    endDate: Date; // 活动结束时间
    onUpdate?: (timeRemaining: TimeRemaining) => void; // 更新回调
    onEnd?: () => void; // 结束回调
}

export interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export class Countdown {
    private intervalId: number | undefined;
    private endDate: Date;
    private onUpdate: (timeRemaining: TimeRemaining) => void;
    private onEnd: () => void;

    constructor(options: CountdownOptions) {
        this.endDate = options.endDate;
        this.onUpdate = options.onUpdate || (() => { });
        this.onEnd = options.onEnd || (() => { });

        this.start();
    }

    private start(): void {
        this.updateCountdown();
        this.intervalId = setInterval(() => this.updateCountdown(), 1000);
    }

    private updateCountdown(): void {
        const now = new Date();
        const timeDifference = this.endDate.getTime() - now.getTime();

        if (timeDifference <= 0) {
            this.clearInterval();
            this.onEnd();
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.onUpdate({ days, hours, minutes, seconds });
    }

    private clearInterval(): void {
        if (this.intervalId !== undefined) {
            clearInterval(this.intervalId);
        }
    }
}