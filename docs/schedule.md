---
layout: default
title: Schedule
---

<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-5">Tentative Schedule</h1>
            <p class="text-center lead mb-5">Workshop Schedule for August 16th, 2025</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-10 mx-auto">
            <div class="schedule-container">
                <div class="schedule-item">
                    <div class="schedule-time">9:00 AM - 9:15 AM</div>
                    <div class="schedule-content">
                        <h4>Welcome and Opening Remarks</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">9:15 AM - 10:00 AM</div>
                    <div class="schedule-content">
                        <h4>Invited Keynote 1</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">10:00 AM - 10:45 AM</div>
                    <div class="schedule-content">
                        <h4>Contributed Paper Session 1</h4>
                    </div>
                </div>

                <div class="schedule-item break">
                    <div class="schedule-time">10:45 AM - 11:00 AM</div>
                    <div class="schedule-content">
                        <h4>Coffee Break</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">11:00 AM - 12:00 PM</div>
                    <div class="schedule-content">
                        <h4>Contributed Paper Session 2</h4>
                    </div>
                </div>

                <div class="schedule-item break">
                    <div class="schedule-time">12:00 PM - 1:00 PM</div>
                    <div class="schedule-content">
                        <h4>Lunch Break</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">1:00 PM - 1:45 PM</div>
                    <div class="schedule-content">
                        <h4>Invited Keynote 2</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">1:45 PM - 2:30 PM</div>
                    <div class="schedule-content">
                        <h4>Poster Session and Networking Break</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">2:30 PM - 3:15 PM</div>
                    <div class="schedule-content">
                        <h4>Breakout Group Discussion</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">3:15 PM - 4:00 PM</div>
                    <div class="schedule-content">
                        <h4>Contributed Paper Session 3</h4>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">4:00 PM - 4:30 PM</div>
                    <div class="schedule-content">
                        <h4>Closing Remarks</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.schedule-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0;
    position: relative;
}

.schedule-item {
    display: flex;
    margin-bottom: 2rem;
    position: relative;
    padding-left: 2.5rem;
    align-items: flex-start;
    min-height: 100px;
}

.schedule-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    background: var(--secondary-color);
    border-radius: 50%;
}

.schedule-item.break::before {
    background: var(--accent-color);
}

.schedule-time {
    flex: 0 0 250px;
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1.1rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    position: sticky;
    top: 1rem;
    background: var(--light-bg);
    z-index: 1;
}

.schedule-content {
    flex: 1;
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    min-height: 80px;
    display: flex;
    align-items: center;
}

.schedule-content:hover {
    transform: translateY(-5px);
}

.schedule-content h4 {
    margin: 0;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.break .schedule-content {
    background: var(--light-bg);
}

@media (max-width: 768px) {
    .schedule-item {
        flex-direction: column;
        padding-left: 1.5rem;
        margin-bottom: 1.5rem;
        min-height: auto;
    }

    .schedule-time {
        flex: none;
        margin-bottom: 0.75rem;
        font-size: 1rem;
        padding-right: 0;
        position: relative;
        top: 0;
        background: none;
    }

    .schedule-content {
        width: 100%;
        min-height: 60px;
    }
}
</style> 