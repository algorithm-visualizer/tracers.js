import { LogTracer, Tracer } from './';

class GraphTracer extends Tracer {
    set(array2d?: any[][]) {
        this.command('set', arguments);
    }

    directed(isDirected?: boolean) {
        this.command('directed', arguments);
        return this;
    }

    weighted(isWeighted?: boolean) {
        this.command('weighted', arguments);
        return this;
    }

    layoutCircle() {
        this.command('layoutCircle', arguments);
        return this;
    }

    layoutTree(root?: any, sorted?: boolean) {
        this.command('layoutTree', arguments);
        return this;
    }

    layoutRandom() {
        this.command('layoutRandom', arguments);
        return this;
    }

    addNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number) {
        this.command('addNode', arguments);
    }

    updateNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number) {
        this.command('updateNode', arguments);
    }

    removeNode(id: any) {
        this.command('removeNode', arguments);
    }

    addEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number) {
        this.command('addEdge', arguments);
    }

    updateEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number) {
        this.command('updateEdge', arguments);
    }

    removeEdge(source: any, target: any) {
        this.command('removeEdge', arguments);
    }

    visit(target: any, source?: any, weight?: any) {
        this.command('visit', arguments);
    }

    leave(target: any, source?: any, weight?: any) {
        this.command('leave', arguments);
    }

    select(target: any, source?: any) {
        this.command('select', arguments);
    }

    deselect(target: any, source?: any) {
        this.command('deselect', arguments);
    }

    log(logTracer: LogTracer) {
        this.command('log', arguments);
    }
}

export default GraphTracer;
