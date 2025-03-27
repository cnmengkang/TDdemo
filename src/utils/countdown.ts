export interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface CountdownOptions {
    endTime: number | string | Date; // 结束时间，可以是时间戳、日期字符串或Date对象
    onUpdate?: (time: CountdownTime) => void; // 每次更新时的回调
    onEnd?: () => void; // 倒计时结束时的回调
    interval?: number; // 更新间隔，默认1000ms
}

export class Countdown {
    private timer: number | null = null;
    private endTime: number;
    private options: CountdownOptions;

    constructor(options: CountdownOptions) {
        this.options = {
            interval: 1000,
            ...options,
        };

        // 处理结束时间
        if (typeof this.options.endTime === 'string') {
            this.endTime = new Date(this.options.endTime).getTime();
        } else if (this.options.endTime instanceof Date) {
            this.endTime = this.options.endTime.getTime();
        } else {
            this.endTime = this.options.endTime;
        }

        // 验证时间
        if (isNaN(this.endTime)) {
            throw new Error('Invalid end time');
        }
    }

    // 开始倒计时
    start(): void {
        this.stop(); // 先停止已有的计时器
        this.update(); // 立即更新一次
        this.timer = window.setInterval(() => this.update(), this.options.interval);
    }

    // 停止倒计时
    stop(): void {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    // 更新倒计时
    private update(): void {
        const now = Date.now();
        const diff = this.endTime - now;

        if (diff <= 0) {
            this.stop();
            if (this.options.onEnd) {
                this.options.onEnd();
            }
            return;
        }

        const time = this.formatTime(diff);

        if (this.options.onUpdate) {
            this.options.onUpdate(time);
        }
    }

    // 格式化时间为天、小时、分钟、秒
    private formatTime(diff: number): CountdownTime {
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        return {
            days: days,
            hours: hours % 24,
            minutes: minutes % 60,
            seconds: seconds % 60,
        };
    }
}