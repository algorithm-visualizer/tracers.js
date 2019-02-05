import { LogTracer, Tracer } from './';

class GraphTracer extends Tracer {
    set(array2d?: any[][]): this {
        return this.addTrace('set', arguments);
    }

    directed(isDirected?: boolean): this {
        return this.addTrace('directed', arguments);
    }

    weighted(isWeighted?: boolean): this {
        return this.addTrace('weighted', arguments);
    }

    addNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number): this {
        return this.addTrace('addNode', arguments);
    }

    updateNode(id: any, weight?: any, x?: number, y?: number, visitedCount?: number, selectedCount?: number): this {
        return this.addTrace('updateNode', arguments);
    }

    removeNode(id: any): this {
        return this.addTrace('removeNode', arguments);
    }

    addEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number): this {
        return this.addTrace('addEdge', arguments);
    }

    updateEdge(source: any, target: any, weight?: any, visitedCount?: number, selectedCount?: number): this {
        return this.addTrace('updateEdge', arguments);
    }

    removeEdge(source: any, target: any): this {
        return this.addTrace('removeEdge', arguments);
    }

    layoutCircle() {
        return this.addTrace('layoutCircle', arguments);
    }

    layoutTree(root?: any, sorted?: boolean) {
        return this.addTrace('layoutTree', arguments);
    }

    layoutRandom() {
        return this.addTrace('layoutRandom', arguments);
    }

    visit(target: any, source?: any, weight?: any) {
        return this.addTrace('visit', arguments);
    }

    leave(target: any, source?: any, weight?: any) {
        return this.addTrace('leave', arguments);
    }

    select(target: any, source?: any) {
        return this.addTrace('select', arguments);
    }

    deselect(target: any, source?: any) {
        return this.addTrace('deselect', arguments);
    }

    log(logTracer: LogTracer) {
        return this.addTrace('log', arguments);
    }
}

export default GraphTracer;
