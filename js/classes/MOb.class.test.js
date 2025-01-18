const { expect } = require('chai');
const sinon = require('sinon');
const MOb = require('./MOb.class.js');
const DrawableObject = require('./DrawableObject.class.js');

describe('MOb', () => {
    let ctx;
    let mob;

    beforeEach(() => {
        ctx = {
            canvas: {
                width: 800,
                height: 600
            },
            drawImage: sinon.spy()
        };
        mob = new MOb('path/to/image.png', 1, true, 0, 0);
        mob.img = new Image();
        mob.img.src = 'path/to/image.png';
        mob.width = 100;
        mob.height = 100;
    });

    it('should call super.draw(ctx)', () => {
        const superDrawSpy = sinon.spy(DrawableObject.prototype, 'draw');
        mob.draw(ctx);
        expect(superDrawSpy.calledOnce).to.be.true;
        superDrawSpy.restore();
    });

    it('should call drawRepeating(ctx) if repeatingX is true', () => {
        const drawRepeatingSpy = sinon.spy(mob, 'drawRepeating');
        mob.draw(ctx);
        expect(drawRepeatingSpy.calledOnce).to.be.true;
    });

    it('should not call drawRepeating(ctx) if repeatingX is false', () => {
        mob.repeatingX = false;
        const drawRepeatingSpy = sinon.spy(mob, 'drawRepeating');
        mob.draw(ctx);
        expect(drawRepeatingSpy.notCalled).to.be.true;
    });

    it('should call drawRepeatingMovingLeft(ctx) if moving left', () => {
        mob.speedX = -5;
        const drawRepeatingMovingLeftSpy = sinon.spy(mob, 'drawRepeatingMovingLeft');
        mob.draw(ctx);
        expect(drawRepeatingMovingLeftSpy.calledOnce).to.be.true;
    });

    it('should call drawRepeatingMovingRight(ctx) if moving right', () => {
        mob.speedX = 5;
        const drawRepeatingMovingRightSpy = sinon.spy(mob, 'drawRepeatingMovingRight');
        mob.draw(ctx);
        expect(drawRepeatingMovingRightSpy.calledOnce).to.be.true;
    });

    it('should draw image at correct position when moving left', () => {
        mob.speedX = -5;
        mob.xPos = -50;
        mob.draw(ctx);
        expect(ctx.drawImage.calledWith(mob.img, 750, 0, 100, 100)).to.be.true;
    });

    it('should draw image at correct position when moving right', () => {
        mob.speedX = 5;
        mob.xPos = 750;
        mob.draw(ctx);
        expect(ctx.drawImage.calledWith(mob.img, -50, 0, 100, 100)).to.be.true;
    });
});