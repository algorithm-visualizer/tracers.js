import { LogTracer, Tracer } from './';

class GraphTracer extends Tracer {
    set(array2d?: any[][]): this {
        return this.wtf('set', arguments);
    }

    directed(isDirected?: boolean): this {
        return this.wtf('directed', arguments);
    }

    weighted(isWeighted?: boolean): this {
        return this.wtf('weighted', arguments);
    }

    addNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number): this {
        return this.wtf('addNode', arguments);
    }

    updateNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number): this {
        return this.wtf('updateNode', arguments);
    }

    removeNode(id: any): this {
        return this.wtf('removeNode', arguments);
    }

    addEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number): this {
        return this.wtf('addEdge', arguments);
    }

    updateEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number): this {
        return this.wtf('updateEdge', arguments);
    }

    removeEdge(source: any, target: any): this {
        return this.wtf('removeEdge', arguments);
    }

    layoutCircle() {
        return this.wtf('layoutCircle', arguments);
    }

    layoutTree(root?: any, sorted?: boolean) {
        return this.wtf('layoutTree', arguments);
    }

    layoutRandom() {
        return this.wtf('layoutRandom', arguments);
    }

    visit(target: any, source?: any, weight?: any) {
        return this.wtf('visit', arguments);
    }

    leave(target: any, source?: any, weight?: any) {
        return this.wtf('leave', arguments);
    }

    select(target: any, source?: any) {
        return this.wtf('select', arguments);
    }

    deselect(target: any, source?: any) {
        return this.wtf('deselect', arguments);
    }

    log(logTracer: LogTracer) {
        return this.wtf('log', arguments);
    }
}

export default GraphTracer;
